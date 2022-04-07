import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    return(
        <>
        <Navbar />
        <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/08203819/Cloud-Computing-Courses.jpg" alt="Cloud Img" style={{width:'100%',height:'600px'}}/>
        <h1 style={{textAlign:'justify', padding:'20px 200px'}}>What is Cloud Computing ?</h1>
        <p style={{textAlign:'justify', padding:'20px 200px',fontSize:'20px'}}>Cloud computing is on-demand access, via the internet, to computing resources—applications, servers (physical servers and virtual servers), data storage, development tools, networking capabilities, and more—hosted at a remote data center managed by a cloud services provider (or CSP). The CSP makes these resources available for a monthly subscription fee or bills them according to usage.

Compared to traditional on-premises IT, and depending on the cloud services you select, cloud computing helps do the following:

Lower IT costs: Cloud lets you offload some or most of the costs and effort of purchasing, installing, configuring, and managing your own on-premises infrastructure. 
Improve agility and time-to-value: With cloud, your organization can start using enterprise applications in minutes, instead of waiting weeks or months for IT to respond to a request, purchase and configure supporting hardware, and install software. Cloud also lets you empower certain users—specifically developers and data scientists—to help themselves to software and support infrastructure.
Scale more easily and cost-effectively: Cloud provides elasticity—instead of purchasing excess capacity that sits unused during slow periods, you can scale capacity up and down in response to spikes and dips in traffic. You can also take advantage of your cloud provider’s global network to spread your applications closer to users around the world.
The term ‘cloud computing’ also refers to the technology that makes cloud work. This includes some form of virtualized IT infrastructure—servers, operating system software, networking, and other infrastructure that’s abstracted, using special software, so that it can be pooled and divided irrespective of physical hardware boundaries. For example, a single hardware server can be divided into multiple virtual servers.

Virtualization enables cloud providers to make maximum use of their data center resources. Not surprisingly, many corporations have adopted the cloud delivery model for their on-premises infrastructure so they can realize maximum utilization and cost savings vs. traditional IT infrastructure and offer the same self-service and agility to their end-users.

If you use a computer or mobile device at home or at work, you almost certainly use some form of cloud computing every day, whether it’s a cloud application like Google Gmail or Salesforce, streaming media like Netflix, or cloud file storage like Dropbox. According to a recent survey, 92% of organizations use cloud today (link resides outside IBM), and most of them plan to use it more within the next year.
</p>
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/M988_fsOSWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

  <Footer />
        </>
    )
}