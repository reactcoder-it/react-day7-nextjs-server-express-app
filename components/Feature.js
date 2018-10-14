export default (props) => (
    <div className="feature">
        <h3 className="feature__title">{props.title}</h3>
        <div className="feature__content">
            <div className="feature__image-block">
                <img className="feature__image" src={props.image} />
            </div>
            <div>
                <p className="feature__text">{props.children}</p>
            </div>
        </div>
        <style jsx>{`
            .feature {
                max-width: 30%;
                flex-grow: 1;
            }
            .feature__title {
                text-align: center;
                margin-top: 30px;
                margin-bottom: 20px;
                font-size: 26px;
                font-weight: 600;
                color: rgb(11,55,85);
            }
            .feature__content {
                display: flex;
            }
            .feature__image-block {
                max-width: 76px;
                flex-shrink: 0;
                margin-right:15px;
            }
            .feature__text {
                font-size:16px;
                font-weight: 400;
                line-height: 1.5;
                color: rgb(64,88,105);
                margin: 0;
            }
        `}</style>
    </div>
  )
  