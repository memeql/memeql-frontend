const DemoPage = (props) => {
    console.log(props.demo)
    console.log(JSON.stringify(props.userData))
    return (
    <>
        <p>Just sample text</p>
        <p>{props.demo}</p>
        <p>{JSON.stringify(props.userData)}</p>
    </>
    )
}

export default DemoPage