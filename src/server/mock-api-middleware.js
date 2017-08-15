
import { middleware as mockApiMiddleware } from "connect-mock-api";
import casual from "casual";

// api/images
// api/images/[1..6]
export default mockApiMiddleware({
  baseUrl: '', //optional
  endpoints: [
      {
          path: '/api/images/',
          template: function() {
              var arr = [];
              for (var i = 1; i <= 6 ; i++) {
                arr.push({
                  id: i,
                  title: casual.title,
                  path: "images/" + i + ".jpg",
                  description: casual.description
                })
              }
              return arr;
          }
      },
      {
          path: '/api/images/:id',
          template: function(params) {
              return {
                id: params.$routeMatch.id,
                title: casual.title,
                path: "images/" + params.$routeMatch.id + ".jpg",
                description: casual.description
              };
          }
      }      
    ]
})
