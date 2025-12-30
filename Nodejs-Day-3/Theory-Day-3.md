1. What is JWT (JSON Web Token)? Explain its structure (header, payload, signature).

JWT (JSON Web Token) is a compact and secure token used to send information between client and server, mainly for authentication. A JWT has three parts separated by dots: header, payload, and signature. The header contains the token type and signing algorithm, the payload contains user data and claims like userId or role, and the signature is created using a secret key to verify that the token has not been modified.

2. How does JWT authentication work? Explain the flow.

JWT authentication works in a simple flow where the user logs in with credentials like email and password. The server verifies these credentials and, if they are correct, generates a JWT and sends it back to the client. The client stores this token and includes it in the Authorization header (as a Bearer token) for every protected API request. The server verifies the token on each request, and if it is valid and not expired, access is granted; otherwise, the request is rejected.

3. What are the advantages and disadvantages of JWT over sessions?

JWT has several advantages over sessions, such as being stateless so the server does not need to store session data, which makes it more scalable and faster for distributed systems. It works well with REST APIs and mobile applications. However, JWT also has disadvantages: tokens are harder to revoke once issued, they are larger in size than session IDs, and if a token is stolen it can be misused until it expires.

4. Where should you store JWTs in the client? (localStorage vs cookies vs memory)

JWTs can be stored in localStorage, cookies, or memory, but each has trade-offs. localStorage is easy to use but vulnerable to XSS attacks. Cookies, especially HTTP-only cookies, are more secure and protective. Storing tokens in memory is the safest option since they are not accessible to scripts, but the token is lost on page refresh. A common best practice is to store the access token in memory and the refresh token in HTTP-only cookies.

5. How do you handle JWT expiration and refresh?

JWT expiration is handled by using short-lived access tokens and long-lived refresh tokens. When the access token expires, the client sends the refresh token to a refresh endpoint. The server verifies the refresh token and issues a new access token. If the refresh token is expired or invalid, the user is required to log in again.

6. How do you handle JWT expiration and refresh?

JWT expiration is handled by keeping access tokens short-lived and using refresh tokens. When the access token expires, the client sends the refresh token to a refresh API. The server verifies the refresh token and generates a new access token. If the refresh token is invalid or expired, the user has to log in again.

7. What is Role-Based Access Control (RBAC)?

RBAC is an authorization method where access to resources is given based on user roles like admin, user, or manager. Each role has specific permissions, which helps in controlling who can access or perform certain actions in the system.

8. How would you implement authorization in an API?

Authorization in an API is implemented using middleware. The middleware first verifies the JWT and then checks the user’s role or permissions from the token. If the user has the required permission, the request is allowed; otherwise, the API returns a forbidden error.