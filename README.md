# MoviesApp

## Description
MoviesApp is a web application built using React and TypeScript that allows users to explore movies, TV series, actors, and reviews. With a clean and intuitive interface, users can easily navigate through various pages to discover information about their favorite movies and TV shows, read reviews, and explore details about actors. Additionally, MoviesApp is deployed on AWS and integrated with an AWS web API, enhancing its functionality and scalability.


## Features
1. **Browse Movies:** Users can browse through a wide selection of movies, including upcoming releases and favorite movies.
2. **Movie Details:** Each movie has its own details page where users can find information such as plot summary, release date,production countries,genres and reviews.
3. **Favorite Movies:** Users can mark movies as favorites and access them later in the Favorites section.
4. **Add Movie Reviews:**  Users can add their own reviews for movies, providing valuable insights for other users.
5. **Browse TV Series:** In addition to movies, users can also explore various TV series and their details.
6. **Actor Details:** Users can view detailed information about their favorite actors, including their biography, filmography, and more.
7. **Search Functionality:** The app provides a search feature that allows users to easily find movies, TV series, and actors based on their preferences.
8. **Server State Caching:**  Caching is implemented using UseQuery for all the pages.
9. **Pagination:**  Pagination is implemented for the List view in the Homepage.
10. **Filter:**  Filtering is available based on Genres for Movies and TV Series.

## Back End Integration
1. **AWS Web API:** Movie Reviews API integrated via config file.
2. **Cloud Front:** App is deployed in S3 with CloudFront Distribution.
3. **Custom Domain** Custom Domain introduced with the help of Route53.
4. **Authentication and Authorization** Hard coded a authenticated User and displayed in console.
5. **Reviews Endpoint** Review is fetched and displayed in console.
   
## Dependencies
- React
- React Router DOM
- React Query
- ReactDOM
- MUI
- AWS Cdk
## Demo
You can view a live demo of MoviesApp [here](https://movies.johnmadhan.com/).
