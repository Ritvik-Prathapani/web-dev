function Header(){
    return(
        <header style={styles.header}>
            <h1>My Website</h1>
            <nav>
                <ul style={styles.navList}>
                    <li><a style={styles.navItem} href ='#'>home </a></li>
                    <li><a style={styles.navItem} href ='#'>about </a></li>
                    <li><a style={styles.navItem} href ='#'>contact </a></li>
                </ul>
            </nav>
        </header>
    )
}

const styles = {
    header:{
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        textAlign: 'center'
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center'
    },
    navItem:{
        marginRight: '15px'
    }
}
export default Header