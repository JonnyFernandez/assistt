import z from './InitioProfile.module.css';

const InitioProfile = () => {
    return (
        <div className={z.initio}>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className={z.divContainer}>
                            <div className={z.div1}>

                            </div>

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className={z.divContainer}>
                            <div className={z.div2}></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={z.divContainer}>
                            <div className={z.div3}></div>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default InitioProfile;
