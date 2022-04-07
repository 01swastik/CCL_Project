import Footer from "./Footer";
import Navbar from "./Navbar";

export default function EC2(){
    return(
        <>
          <Navbar />
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--1o_3zvam--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zshiw2q5ivdz5cvpt6cm.png" alt="Cloud Img" style={{width:'100%',height:'600px'}}/>
              <h1 style={{textAlign:'justify', padding:'20px 200px'}}>What is AWS EC2?</h1>
              <p style={{textAlign:'justify', padding:'20px 200px',fontSize:'20px'}}>
Among the vast array of services that Amazon offers, EC2 is the core compute component of the technology stack. In practice, EC2 makes life easier for developers by providing secure, and resizable compute capacity in the cloud. It greatly eases the process of scaling up or down, can be integrated into several other services, and comes with a plan where you only pay for how much you use it. </p>
              <h1 style={{textAlign:'justify', padding:'20px 200px'}}>How EC2 works?</h1>
              <p style={{textAlign:'justify', padding:'20px 200px',fontSize:'20px'}}>
To begin using EC2, developers sign up for an account at Amazon's AWS website. They can then use the AWS Management Console, the AWS Command Line Tools (CLI), or AWS Software Developer Kits (SDKs) to manage EC2.  

A developer then chooses EC2 from the AWS Services dashboard and 'launch instance' in the EC2 console. At this point, they select either an Amazon Machine Image (AMI) template or create an AMI containing an operating system, application programs, and configuration settings. The AMI is then uploaded to the Amazon S3 and registered with Amazon EC2, creating an AMI identifier. Once this has been done, the subscriber can requisition virtual machines on an as-needed basis.

Data only remains on an EC2 instance while it is running, but a developer can use an Amazon Elastic Block Store volume for an extra level of durability and Amazon S3 for EC2 data backup.

VM Import/Export allows a developer to import on-premises virtual machine images to Amazon EC2, where they are turned into instances.

EC2 also offers Amazon CloudWatch which monitors Amazon cloud applications and resources, allowing users to set alarms, view graphs, and get statistics for AWS data; and AWS Marketplace, an online store where users can buy and sell software that runs on AWS.</p>
  
  <center><iframe width="560" height="315" src="https://www.youtube.com/embed/TsRBftzZsQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
          <Footer />
        </>
    )
}

