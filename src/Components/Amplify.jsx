import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Amplify(){
    return(
        <>
          <Navbar />
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--cSbKyCOr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tldx6slnss1r9o241718.png" alt="Cloud Img" style={{width:'100%',height:'600px'}}/>
              <h1 style={{textAlign:'justify', padding:'20px 200px'}}>How Does Amplify Work ?</h1>
              <p style={{textAlign:'justify', padding:'20px 200px', fontSize:'20px'}}>How Does AWS Amplify Work? 
Your main interaction point when using Amplify is the CLI tool, which comes with many commands that help you set up and maintain a serverless project. The Amplify CLI can create infrastructure by generating and deploying CloudFormation code. It also includes code generators for mobile and web apps that use the following languages: JavaScript/TypeScript, Dart, Swift, Java and GraphQL.

This way, you get new AWS resources deployed to the cloud, configured with best practices, and the boilerplate code needed to connect your frontend with these resources.

Amplify also has its own set of cloud services which you can use to set up and manage your apps, including web hosting based on Amazon S3 and Amazon CloudFront, the Amplify Console and Amplify Admin UI. The Amplify Console is used to get insights into your app’s workings after you deploy it, while the Amplify Admin UI is a visual alternative to the Amplify CLI, where you can create backends in the browser.

There is also a large set of frontend libraries and components that help you connect with the AWS services and ease the integration of Amplify with frontend frameworks like React or Vue. This includes a library for authentication with Amazon Cognito, AWS’ own identity management service, and a GraphQL client to connect to AppSync, a hosted GraphQL API service.

With Amplify DataStore, Amplify even includes a relatively high-level library that eases the pain of setting up offline functionality and real-time synchronization for your apps.</p>
  <center><iframe width="560" height="315" src="https://www.youtube.com/embed/uRbGMZ9oPjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
          <Footer />
        </>
    )
}