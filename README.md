# MARKETING MATE

# API Project

## Description

This project is an API built using Node.js and TypeScript. It utilizes a range of dependencies including Express for server functionality, Mongoose for interacting with MongoDB, Axios for HTTP requests, and several others. The API serves various endpoints for different functionalities.

## Requirements

This project uses Yarn as its package manager. Yarn provides faster package installations and more reliable dependency management than the traditional npm client. If you haven't installed Yarn yet, you can download it from [Yarn's official website](https://yarnpkg.com/).

## Installation

To install and set up this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/mustafaberk-ay/marketing-mate.git
   ```
2. Navigate to the project directory:
   ```
   cd api
   ```
3. Install dependencies:
   ```
   yarn install
   ```

## Usage

After installing, you can use the following scripts:

- `yarn start`: Starts the server using the compiled JavaScript in the `dist` directory.
- `yarn build`: Compiles the TypeScript code to JavaScript.
- `yarn dev`: Starts the server in development mode using `ts-node`.

To start the server in development mode:
```
yarn dev
```

## Testing API Endpoints with Postman
Postman is a popular tool for testing API endpoints. It allows you to easily send requests to your API and view responses. To test the endpoints of this API project, follow these steps:

### Setting Up Postman
  1. **Download and Install Postman:** If you don't have Postman installed, download it from Postman's official website and install it on your machine.
  2. **Launch Postman:** Open the application after installation.

### Importing the API Collection 
An exported Postman collection is provided within the api project, you can import `postman_collection.json` into Postman. This collection includes pre-configured requests for all available endpoints.
To import, click on 'Import' in the top left corner of Postman and select the provided collection file.

### Manually Testing Endpoints
  1. **Create a New Request:** Click the 'New' button and select 'Request'. This allows you to create a new request to an endpoint.

  2. **Configure the Request:**

  - Set the correct HTTP method (GET, POST, PUT, DELETE, etc.) as required by the endpoint. 
  - Enter the endpoint URL. If running locally, this will typically be something like `http://localhost:3000/[endpoint]`.
  - If the request requires parameters or a body payload, enter these in the 'Body' tab.

  4. **Send the Request:** Click the 'Send' button to dispatch the request to the API.

  5. **Review the Response:** The response from the API will be displayed in Postman, including status code, headers, and the body.

## Endpoints

Access the API endpoints through `http://localhost:3000/[endpoint]`.

### Chat Thread Endpoints

GET: /chatThread/retrieveAssistant

GET: /chatThread/createThread

POST: /chatThread/sendMessage

GET: /chatThread/getLastMessage

### Image Generation  Endpoints

POST: /imageGeneration/generateImage

POST: /imageGeneration/editImage

POST: /imageGeneration/createImageVariations

### Message Endpoints

GET: /message/getMessages

GET: /message/getHighestThreadId

POST: /message/createMessage

POST: /message/getMessageById
