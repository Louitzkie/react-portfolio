import "./Service.css";
import Card from "../../components/Card";

const Service = () => {
    const datas = [
        { id: 1, title: "Web Development", desc: "desc1" },
        { id: 2, title: "Photoshop Edit", desc: "desc1" },
    ];
    return (
        <section className="service">
            <div className="container flow-content">
                <div className="service__content ">
                    <h2 className="service__title page-title">Service</h2>
                    <h3>What I Offer</h3>
                </div>
                <div className="cards">
                    {datas.map((data) => (
                        <Card key={data.id} title={data.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
