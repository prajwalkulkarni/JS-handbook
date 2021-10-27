//SSG - Static site generation
/* Next js apps serves static sites to client requests, meaning The content is baked into the HTML and the HTML along with minified JS files are served to the consumer, this minified
JS file make the page fully interactive, this is called as hydration.
*/

//If we've a site which serves data from elsewhere or serves data that can be updated over time, this dynamic functionality can be served as static file in 2 ways.
//1 . getStaticProps along with getStaticPaths (if using dynamic path)
//2 . getServerSideProps

//getStaticProps
/* This function runs on the server and is not rendered/loaded on the client side. This function runs during the build time only, (if revalidate: false ->explained below).
By build time we mean, when we are generating static files by running next build or npm run build. 
*/

export async function getStaticProps(){
  
  //Async or any work can be done here, including accessing database, querying etc.
  
  return {
    props:{
      data: 'data returned from fetch or just about anything.
      key: 'value'
    }
  }
  //This props can be consumed by the component that required dynamic content to injected in it.
}


//getStaticPaths
/* This function is used to generate static files for components with dynamic routes, meaning if there are 3 possible versions of a dynamic route (e.g /post/1 , /post/2, /post/3)
NextJS generates static files for all of these 3 routes, since they follow similar route structure only the content within the layout varies mostly.
getStaticPaths is usually used in association with getStaticProps, we can consider an analogy where getStaticPaths returns an array of all the posts, and getStaticProps further, for each 
post fetches and injects content/data.
*/

export async function getStaticPaths(){
  
  //can do a fetch request to return all the possible paths.
  
  return {
    paths: [
      {
        params:{
          postId:1
        }
      },
      {
        params:{
          postId:2
        }
      }
      ],
    fallback:false
    ]
  }
}

export async function getStaticProps(context){
  
  const {params} = context
  
  //fetch data for individual post like
  const data = await fetch(`URL/${params.postId}`)
  const res = await data.json()
  
  return {
    props:{
      data: res
    }
  }
}
