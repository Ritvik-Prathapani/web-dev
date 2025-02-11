function Footer(){
    return (
        <footer style = {styles.footer}>
            <p>all rights reserved</p>
        </footer>
    )
}
const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        width:'100%',
        bottom:0
    }
}
export default Footer