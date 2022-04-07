export default function Navbar(){
    return(
    <>
    <div style={{backgroundColor:"whitesmoke", display:'flex', position:'fixed', width:'100%'}}>
        <h1 style={{textAlign:"left", paddingRight:'100px'}}>CLOUD COMPUTING</h1>
        <a href="/" style={{textDecoration:'none',color:'black',paddingTop:'30px',paddingRight:'30px',fontSize:'19px'}}>Home</a>
        <a href="/amplify" style={{textDecoration:'none',color:'black',paddingTop:'30px',paddingRight:'30px',fontSize:'19px'}}>AWS Amplify</a>
        <a href="/aws-S3" style={{textDecoration:'none',color:'black',paddingTop:'30px',paddingRight:'30px',fontSize:'19px'}}>Amazon S3</a>
        <a href="/EC2" style={{textDecoration:'none',color:'black',paddingTop:'30px',paddingRight:'30px',fontSize:'19px'}}>Amazon EC2</a>
        <a href="#contact-us" style={{textDecoration:'none',color:'black',paddingTop:'30px',paddingRight:'30px',fontSize:'19px'}}>Contact Us</a>
    </div>
    </>
    )
}