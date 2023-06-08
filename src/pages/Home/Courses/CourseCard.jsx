

const CourseCard = ({item}) => {

    const {courseName, category, instructor, details, rating, enrolledStudents, image} = item

    return (
        <div className="card col w-96 bg-base-200 rounded-none">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;