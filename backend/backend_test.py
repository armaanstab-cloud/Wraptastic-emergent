import requests
import sys
from datetime import datetime

class WraptasticAPITester:
    def __init__(self, base_url="https://auto-wraps-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, check_response=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            # Additional response checks
            if success and check_response:
                try:
                    json_data = response.json()
                    success = check_response(json_data)
                except Exception as e:
                    print(f"⚠️  Response check failed: {str(e)}")
                    success = False

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                self.test_results.append({"test": name, "status": "PASS", "code": response.status_code})
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.text[:200]}")
                except Exception:
                    pass
                self.test_results.append({"test": name, "status": "FAIL", "code": response.status_code, "expected": expected_status})

            return success, response.json() if response.status_code < 500 else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.test_results.append({"test": name, "status": "FAIL", "error": "Timeout"})
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({"test": name, "status": "FAIL", "error": str(e)})
            return False, {}

    def test_health(self):
        """Test health endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "health",
            200,
            check_response=lambda r: r.get("status") == "ok" and r.get("db") == "connected"
        )
        if success:
            print(f"   ✓ Status: {response.get('status')}, DB: {response.get('db')}")
        return success

    def test_create_quote_valid(self):
        """Test creating a valid quote"""
        timestamp = datetime.now().strftime('%H%M%S')
        quote_data = {
            "name": f"Test User {timestamp}",
            "phone": "(647) 123-4567",
            "email": f"test{timestamp}@example.com",
            "vehicle_make": "Tesla",
            "vehicle_model": "Model Y",
            "vehicle_year": "2023",
            "service": "Vinyl Wrap",
            "preferred_contact_method": "WhatsApp",
            "message": "Test quote request"
        }
        
        success, response = self.run_test(
            "Create Valid Quote",
            "POST",
            "quotes",
            200,
            data=quote_data,
            check_response=lambda r: "id" in r and "created_at" in r
        )
        
        if success:
            print(f"   ✓ Quote ID: {response.get('id')}")
            print(f"   ✓ Created at: {response.get('created_at')}")
            return response.get('id')
        return None

    def test_honeypot_rejection(self):
        """Test honeypot field rejection"""
        timestamp = datetime.now().strftime('%H%M%S')
        quote_data = {
            "name": f"Bot User {timestamp}",
            "phone": "(647) 123-4567",
            "email": f"bot{timestamp}@example.com",
            "vehicle_make": "Tesla",
            "vehicle_model": "Model Y",
            "vehicle_year": "2023",
            "service": "Vinyl Wrap",
            "preferred_contact_method": "WhatsApp",
            "message": "Test quote request",
            "company": "Spam Company"  # Honeypot field filled
        }
        
        success, response = self.run_test(
            "Honeypot Rejection",
            "POST",
            "quotes",
            400,
            data=quote_data
        )
        return success

    def test_invalid_email(self):
        """Test invalid email validation"""
        timestamp = datetime.now().strftime('%H%M%S')
        quote_data = {
            "name": f"Test User {timestamp}",
            "phone": "(647) 123-4567",
            "email": "invalid-email",  # Invalid email
            "vehicle_make": "Tesla",
            "vehicle_model": "Model Y",
            "vehicle_year": "2023",
            "service": "Vinyl Wrap",
            "preferred_contact_method": "WhatsApp",
            "message": "Test quote request"
        }
        
        success, response = self.run_test(
            "Invalid Email Validation",
            "POST",
            "quotes",
            422,
            data=quote_data
        )
        return success

    def test_missing_required_fields(self):
        """Test missing required fields"""
        quote_data = {
            "vehicle_make": "Tesla",
            "vehicle_model": "Model Y"
            # Missing name, phone, email
        }
        
        success, response = self.run_test(
            "Missing Required Fields",
            "POST",
            "quotes",
            422,
            data=quote_data
        )
        return success

    def test_list_quotes(self):
        """Test listing quotes"""
        success, response = self.run_test(
            "List Quotes",
            "GET",
            "quotes",
            200,
            check_response=lambda r: isinstance(r, list)
        )
        
        if success:
            print(f"   ✓ Found {len(response)} quotes in database")
        return success

    def print_summary(self):
        """Print test summary"""
        print("\n" + "="*60)
        print(f"📊 TEST SUMMARY")
        print("="*60)
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        print("="*60)
        
        if self.tests_passed == self.tests_run:
            print("✅ All tests passed!")
            return 0
        else:
            print("❌ Some tests failed")
            return 1

def main():
    print("="*60)
    print("🚗 WRAPTASTIC AUTO CUSTOMS - Backend API Tests")
    print("="*60)
    
    tester = WraptasticAPITester()
    
    # Run all tests
    print("\n📋 Running Backend API Tests...\n")
    
    # 1. Health check
    tester.test_health()
    
    # 2. Create valid quote
    quote_id = tester.test_create_quote_valid()
    
    # 3. Honeypot rejection
    tester.test_honeypot_rejection()
    
    # 4. Invalid email
    tester.test_invalid_email()
    
    # 5. Missing required fields
    tester.test_missing_required_fields()
    
    # 6. List quotes
    tester.test_list_quotes()
    
    # Print summary
    return tester.print_summary()

if __name__ == "__main__":
    sys.exit(main())
