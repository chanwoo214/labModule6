
function Greeting (props) {
   
   const messageJsx = props.name ? <h1>Hello {props.name}!</h1> : "Hello World!"
   
    return (
        <>
        {messageJsx}

        <h2 style={{color:'blue'}}>
        {props.children}
        </h2>
        

        </>

        );
}

export default Greeting;

