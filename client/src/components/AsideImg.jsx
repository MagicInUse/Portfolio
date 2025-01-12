const AsideImg = ({ source, alt, classes }) => {
    return (
        <aside>
            <img src={source} alt={alt} className={classes}/>
        </aside>
    );
};

export default AsideImg;