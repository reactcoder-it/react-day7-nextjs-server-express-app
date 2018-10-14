export default (props) => (
    <div className="feature-list">
        {props.children}
        <style jsx>{`
            .feature-list {
                display: flex;
                justify-content: space-between;
                max-width: 1200px;
                width: 100%;
                margin: auto;
            }
        `}</style>
    </div>
)