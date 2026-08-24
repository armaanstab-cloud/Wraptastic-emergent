import requests
import sys
from datetime import datetime

class WraptasticAPITester:
    def __init__(self, base_url="https://auto-wraps-1.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    print(f"   Response: {response.json()}")
                except Exception:
                    print(f"   Response: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:300]}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "endpoint": endpoint
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e),
                "endpoint": endpoint
            })
            return False, {}

    def test_health(self):
        """Test health endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "health",
            200
        )
        if success:
            if response.get('status') == 'ok' and response.get('db') == 'connected':
                print("   ✓ Database connection verified")
                return True
            else:
                print("   ⚠ Health check returned unexpected response")
                return False
        return False

    def test_create_quote(self):
        """Test creating a quote"""
        test_quote = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "phone": "(647) 123-4567",
            "email": "test@example.com",
            "vehicle_make": "Tesla",
            "vehicle_model": "Model Y",
            "vehicle_year": "2023",
            "service": "Vinyl Wrap",
            "preferred_contact_method": "WhatsApp",
            "message": "Test quote request for automated testing",
            "company": ""  # honeypot field - must be empty
        }
        
        success, response = self.run_test(
            "Create Quote",
            "POST",
            "quotes",
            200,
            data=test_quote
        )
        
        if success and response.get('id'):
            print(f"   ✓ Quote created with ID: {response.get('id')}")
            return response.get('id')
        return None

    def test_honeypot_rejection(self):
        """Test that honeypot field rejects bots"""
        bot_quote = {
            "name": "Bot User",
            "phone": "(647) 999-9999",
            "email": "bot@spam.com",
            "vehicle_make": "Spam",
            "vehicle_model": "Bot",
            "vehicle_year": "2024",
            "service": "Spam Service",
            "preferred_contact_method": "Email",
            "message": "This is a bot",
            "company": "SpamCorp"  # honeypot filled - should be rejected
        }
        
        success, response = self.run_test(
            "Honeypot Bot Rejection",
            "POST",
            "quotes",
            400,  # Should return 400 for bot
            data=bot_quote
        )
        
        if success:
            print("   ✓ Honeypot correctly rejected bot submission")
            return True
        return False

    def test_list_quotes(self):
        """Test listing quotes"""
        success, response = self.run_test(
            "List Quotes",
            "GET",
            "quotes",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   ✓ Retrieved {len(response)} quotes")
            return True
        return False

    def test_root_endpoint(self):
        """Test root API endpoint"""
        success, response = self.run_test(
            "Root Endpoint",
            "GET",
            "",
            200
        )
        return success

def main():
    print("=" * 60)
    print("WRAPTASTIC AUTO CUSTOMS - Backend API Testing")
    print("=" * 60)
    
    tester = WraptasticAPITester()

    # Run all tests
    print("\n📋 Running Backend API Tests...\n")
    
    # 1. Test health endpoint
    tester.test_health()
    
    # 2. Test root endpoint
    tester.test_root_endpoint()
    
    # 3. Test quote creation
    quote_id = tester.test_create_quote()
    
    # 4. Test honeypot rejection
    tester.test_honeypot_rejection()
    
    # 5. Test listing quotes
    tester.test_list_quotes()

    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 Test Summary: {tester.tests_passed}/{tester.tests_run} tests passed")
    print("=" * 60)
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for fail in tester.failed_tests:
            error_msg = fail.get('error', f"Expected {fail.get('expected')}, got {fail.get('actual')}")
            print(f"  - {fail.get('test')}: {error_msg} ({fail.get('endpoint')})")
    else:
        print("\n✅ All backend tests passed!")
    
    print("\n")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
