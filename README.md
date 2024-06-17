![marvel](https://github.com/lucasvallejodev/marvel-characters/assets/97030519/a27fcdbc-8d46-44ca-9b76-a026a5f085cb)

# Marvel Characters

This is a simple project that displays a list of Marvel heroes and their details.

## Hero list
![image](https://github.com/lucasvallejodev/marvel-characters/assets/97030519/05d2a159-0159-442d-a278-3682a0591171)

## Favorite List
![image](https://github.com/lucasvallejodev/marvel-characters/assets/97030519/11daaf18-3849-46df-a5be-5bd92b370982)

## Hero Detail
![image](https://github.com/lucasvallejodev/marvel-characters/assets/97030519/b8d37219-3652-48d2-92c6-59d4163cb073)


## Setup

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Create the `.env.development` file and use `.env.example` as reference.
5. Run the project using `npm run dev`.

> [!NOTE]
> This projects uses an external API called (Developer Marvel)[https://developer.marvel.com/documentation/getting_started]. Use the link to set up your account and get your `API_KEY`.

## Environment Variables

This project uses environment variables to manage sensitive data. Create a `.env.development` file in the root directory of the project and add the following variables:

```env
# Replace it with your actual values
VITE_BASE_URL=your_base_url
VITE_API_KEY=your_api_key
```
You can use `.env.example` as reference.

## Testing
The project covers some basic testing for the page components and can be run using the following command:

```
npm run test
```

## Building
To build the project, use the following command:

```
npm run build
```

This will create a dist directory with the production-ready files.

## Some improvements that can be made
- Use of lazy loading for images, in order to avoid some glitches when the component is rendered by not the image.
- Use of a css pre-processor for helping with the use of CSS variables.

## Some used libraries
- `react-query`: To manage cache and data fetching.
- `react-router-dom`: Used for routing in the application.
- `@testing-library/react`: Used for testing React components.
- `vitest`: Used as the unit testing framework.
- `vite`: Used as the build tool and dev server.
