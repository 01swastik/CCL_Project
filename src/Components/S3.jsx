import Footer from "./Footer";
import Navbar from "./Navbar";

export default function S3(){
    return(
        <>
          <Navbar />
          <img src="https://www.split.io/wp-content/uploads/2021/01/amazon-s3-logo.png" alt="Cloud Img" style={{width:'100%',height:'600px'}}/>
              <h1 style={{textAlign:'justify', padding:'20px 200px'}}>What is Amazon S3 ?</h1>
              <p style={{textAlign:'justify', padding:'20px 200px',fontSize:'20px'}}>Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.</p>
              <h1 style={{textAlign:'justify', padding:'20px 200px'}}>Why Should I Consider Using Amazon S3?</h1>
              <p style={{textAlign:'justify', padding:'20px 200px',fontSize:'20px'}}>If you’re still not sure whether Amazon S3 is right for your organization, consider this: Amazon S3 is designed for 99.999999999% (11 9s) of data durability. With that level of durability, you can expect that if you store 10,000,000 objects in Amazon S3, you should only expect to lose a single object every 10,000 years! 

Amazon S3 automatically creates and stores copies of all uploaded objects across multiple systems, allowing your data to be protected against failures, errors, and threats and available when needed. 

Let our AWS experts help you get started with a consultation today!</p>
  
  <center><iframe width="560" height="315" src="https://www.youtube.com/embed/_I14_sXHO8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </center>
          <Footer />
        </>
    )
}

