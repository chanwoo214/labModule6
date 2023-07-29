function SingleCat() {

    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
    ];

   // const listCats = cats.map(cat => <li key= {cat.id}>{cat.name + '-' + cat.latinName}</li>);
     const listCats = cats.map(cat => <SingleCats key= {cat.id} cat = {cat}></SingleCats>);

    return (
        <ul>
            {listCats}
        </ul>
    );
}

function SingleCats ({cat}) {
    return (
        <div>
           <h1>{cat.name}</h1>  {cat.latinName}
        </div>
    )
}

export default SingleCat;