# Discussion Forum GraphQL Backend

A modern, scalable GraphQL-based discussion forum backend built with TypeScript, Express.js, Apollo Server, and TypeORM. This application provides a complete API for managing users, posts, and comments with authentication and authorization features.

## 🚀 Features

- **GraphQL API**: Full GraphQL implementation with Apollo Server
- **User Authentication**: JWT-based authentication with role-based access control
- **Discussion Management**: Create, read, update, delete posts and comments
- **Nested Comments**: Support for hierarchical comment structure (replies to comments)
- **User Roles**: Admin and User role management
- **Tag System**: Post tagging functionality
- **Database Integration**: PostgreSQL with TypeORM
- **TypeScript**: Full TypeScript implementation for type safety
- **Middleware**: Authentication, authorization, and request validation middleware
- **Seeding**: Admin user seeding functionality
- **Error Handling**: Comprehensive error handling and logging
- **Code Formatting**: Prettier integration for consistent code style

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **GraphQL**: Apollo Server v4
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Validation**: class-validator & class-transformer
- **Logging**: Winston & Morgan
- **Development**: ts-node-dev for hot reloading

## 📁 Project Structure

```
src/
├── config/                 # Configuration files
│   ├── apolloServer.config.ts
│   ├── database.config.ts
│   ├── env.config.ts
│   ├── logger.config.ts
│   └── typeGraphQL.config.ts
├── constant/               # Application constants
│   ├── admin.ts
│   ├── enum.ts
│   ├── regex.ts
│   └── statusCodes.ts
├── entities/               # Database entities
│   ├── auth/
│   │   └── auth.entity.ts
│   ├── comments/
│   │   └── comment.entity.ts
│   ├── posts/
│   │   └── post.entity.ts
│   └── base.entity.ts
├── interface/              # TypeScript interfaces
├── middleware/             # Express & GraphQL middleware
├── resolvers/              # GraphQL resolvers
├── schema/                 # GraphQL schemas
├── seeders/                # Database seeders
├── services/               # Business logic services
├── types/                  # Type definitions
├── utils/                  # Utility functions
├── validator/              # Input validation schemas
└── server.ts               # Application entry point
```

## 🚦 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## ⚙️ Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/parajuliaashutosh/discussion-forum-graphql--backend.git
    cd discussion-forum-graphql--backend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment Setup**

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your configuration:

    ```env
    # Development Configuration
    NODE_ENV=DEVELOPMENT
    PORT=8000

    # Database Configuration
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USERNAME=your_db_username
    DATABASE_PASSWORD=your_db_password
    DATABASE_NAME=your_db_name

    # JWT Configuration
    JWT_SECRET=your_jwt_secret_key
    JWT_TOKEN_EXPIRE=1d

    # Admin Seeder
    ADMIN_PASSWORD=your_admin_password

    # Backend URL
    BACKEND_URL=http://localhost
    ```

4. **Database Setup**
    - Create a PostgreSQL database
    - Update database credentials in `.env`
    - The application will automatically create tables on startup

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run start:dev
```

### Seed Admin User

```bash
npm run seed:admin
```

### Code Formatting

```bash
# Format code
npm run format

# Check formatting
npm run format:check
```

## 🔗 API Endpoints

The GraphQL endpoint is available at: `http://localhost:8000/graphql`

### Main Queries

- `getPosts`: Retrieve all posts
- `getComments`: Retrieve comments for a post

### Main Mutations

- **Authentication**
    - `register`: User registration
    - `login`: User login

- **Posts**
    - `postDiscussion`: Create a new post
    - `deletePost`: Delete a post

- **Comments**
    - `addComment`: Add a comment to a post
    - `deleteComment`: Delete a comment

## 🗄️ Database Schema

### Entities

1. **Auth (Users)**
    - `id`, `name`, `email`, `password`, `phone`, `role`
    - Relationships: One-to-Many with Posts

2. **Post**
    - `id`, `title`, `description`, `tags`, `userId`
    - Relationships: Many-to-One with Auth, One-to-Many with Comments

3. **Comment**
    - `id`, `comment`, `userId`, `postId`, `parent`
    - Relationships: Many-to-One with Auth and Post, Self-referencing for nested comments

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control (Admin/User)
- Protected routes require authentication middleware
- Admin-only operations protected by authorization middleware

## 🧪 GraphQL Playground

Access the GraphQL Playground at `http://localhost:8000/graphql` for:

- Interactive query testing
- Schema exploration
- API documentation

## 📝 Example Queries

### Register User

```graphql
mutation {
    register(
        data: {
            name: "John Doe"
            email: "john@example.com"
            password: "password123"
            phone: "1234567890"
        }
    )
}
```

### Create Post

```graphql
mutation {
    postDiscussion(
        data: {
            title: "My First Post"
            description: "This is my first discussion post"
            tags: ["general", "introduction"]
        }
    )
}
```

### Get Posts

```graphql
query {
    getPosts {
        id
        title
        description
        tags
        createdAt
        auth {
            name
            email
        }
    }
}
```

## 🛡️ Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation with class-validator
- SQL injection prevention with TypeORM
- Role-based access control
- Request sanitization

## 🔧 Development Tools

- **TypeScript**: Type safety and better development experience
- **ts-node-dev**: Hot reloading during development
- **Prettier**: Code formatting
- **Winston**: Structured logging
- **Morgan**: HTTP request logging

## 📊 Logging

The application includes comprehensive logging:

- Request/Response logging with Morgan
- Application logs with Winston
- Database connection status
- Error tracking and debugging information

## 🚀 Deployment

1. Set `NODE_ENV=PRODUCTION` in environment variables
2. Configure production database settings
3. Set secure JWT secret
4. Deploy to your preferred hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Aashutosh Parajuli**

- GitHub: [@parajuliaashutosh](https://github.com/parajuliaashutosh)

## 🆘 Support

If you encounter any issues or have questions, please create an issue in the GitHub repository.

---

**Happy Coding!** 🎉
