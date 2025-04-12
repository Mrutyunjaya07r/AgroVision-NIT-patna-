const soilCrops = {
    "Cambisols": [
        { name: "Wheat", image: "" },
        { name: "Barley", image: "https://images.app.goo.gl/cUUjqY78v8bk2zWT8" },
        { name: "Maize", image: "https://images.app.goo.gl/uDXhXt7T7hTDzYDh6" }
    ],
    "Nitisols": [
        { name: "Coffee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuFjSBBJWO3xZHpSuMoy38VGyKlskd1qAew&s" },
        { name: "Tea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrS8QIjuiU-ai5N8DDtgNEQZMPlvSzs7bLA&s" },
        { name: "Maize", image: "https://www.shutterstock.com/image-photo/yellow-corn-on-green-plant-260nw-1918918295.jpg" }
    ],
    "Ferralsols": [
        { name: "Cassava", image: "https://media.istockphoto.com/id/626302984/photo/bulk-of-fresh-cassava-harvested-in-farmland.jpg?s=612x612&w=0&k=20&c=12C2lJ8IIpmTCQ4JehXEzMxzhL4S8ydpp14-cmNi6q0=" },
        { name: "Banana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTsvJvgLXwGUG15tzkJ5umMcAmv1I1l3A7g&s" },
        { name: "Rubber", image: "https://media.istockphoto.com/id/480691906/photo/rubber-latex-collected-in-bowl.jpg?s=612x612&w=0&k=20&c=F_VzQcYBG7NiIIbr2X_YBABFQ75oGOaBkayqyjngD9w=" }
    ],
    "Regosols": [
        { name: "Millet", image: "https://t3.ftcdn.net/jpg/01/15/32/36/360_F_115323672_320e7Bmz9nhF9uDgukpJWSmDnOjYSLsL.jpg" },
        { name: "Sorghum", image: "https://cdn.britannica.com/21/136021-050-FA97E7C7/Sorghum.jpg" },
        { name: "Peanuts", image: "https://media.istockphoto.com/id/1280999565/photo/hands-harvesting-fresh-organic-peanut-from-soil.jpg?s=612x612&w=0&k=20&c=hCM8f65X3UEfOkKuKpCbxCZptT9TwMaGCSgvDrS6Vwk=" }
    ],
    "Anthrosols": [
        { name: "Rice", image: "https://t3.ftcdn.net/jpg/02/71/72/42/360_F_271724295_5mOXgLdBpOIk7jspFGSdkY1ShVqBjCie.jpg" },
        { name: "Vegetables", image: "https://media.istockphoto.com/id/174429248/photo/fresh-vegetables.jpg?s=612x612&w=0&k=20&c=fxlgOIET7gKa8M3rwkV974aUfB0gVpWiJQwUoxA4dtQ=" },
        { name: "Fruit Crops", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcP26ANR0t0Q8LBRJmmKa4uO4pV1lsHlTTw&s" }
    ],
    "Fluvisols": [
        { name: "Rice", image: "https://t3.ftcdn.net/jpg/02/71/72/42/360_F_271724295_5mOXgLdBpOIk7jspFGSdkY1ShVqBjCie.jpg" },
        { name: "Sugarcane", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKHp9McIWhPTAw6VB1mUcjmDmUKQbAEERgA&s" },
        { name: "Vegetables", image: "https://media.istockphoto.com/id/174429248/photo/fresh-vegetables.jpg?s=612x612&w=0&k=20&c=fxlgOIET7gKa8M3rwkV974aUfB0gVpWiJQwUoxA4dtQ=" }
    ],
    "Gleysols": [
        { name: "Rice", image: "https://t3.ftcdn.net/jpg/02/71/72/42/360_F_271724295_5mOXgLdBpOIk7jspFGSdkY1ShVqBjCie.jpg" },
        { name: "Maize", image: "https://www.shutterstock.com/image-photo/yellow-corn-on-green-plant-260nw-1918918295.jpg" },
        { name: "Soybeans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIryCHcCtTffwMFn3Xi5UpU2tF7qzRK9nLuw&s" }
    ],
    "Arenosols": [
        { name: "Cashew", image: "https://t3.ftcdn.net/jpg/01/94/39/96/360_F_194399685_4xJXBSMRzD5Ay50yvPsMj2rht1NI8712.jpg" },
        { name: "Coconut", image: "https://parachutekalpavriksha.org/cdn/shop/articles/Sure_ways_to_keep_the_coconut_tree_healthy.jpg?v=1711267599&width=2048" },
        { name: "Pineapple", image: "https://images.pexels.com/photos/15558015/pexels-photo-15558015/free-photo-of-pineapple-cultivation-in-greenhouse.jpeg" }
    ],
    "Lixisols and acrisols": [
        { name: "Cocoa", image: "https://m.media-amazon.com/images/I/71es8YV3GyL.AC_UF1000,1000_QL80.jpg" },
        { name: "Cassava", image: "https://m.media-amazon.com/images/I/71es8YV3GyL.AC_UF1000,1000_QL80.jpg" },
        { name: "Oil Palm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyZgmK8apN22R9TIgoncJFNXzusDSFTXi1w&s" }
    ],
    "Luvisols": [
        { name: "Wheat", image: "https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg" },
        { name: "Soybeans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIryCHcCtTffwMFn3Xi5UpU2tF7qzRK9nLuw&s" },
        { name: "Maize", image: "https://www.shutterstock.com/image-photo/yellow-corn-on-green-plant-260nw-1918918295.jpg" }
    ],
    "Alisols": [
        { name: "Tea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrS8QIjuiU-ai5N8DDtgNEQZMPlvSzs7bLA&s" },
        { name: "Coffee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuFjSBBJWO3xZHpSuMoy38VGyKlskd1qAew&s" },
        { name: "Maize", image: "https://www.shutterstock.com/image-photo/yellow-corn-on-green-plant-260nw-1918918295.jpg" }
    ],
    "Durisols": [
        { name: "Date Palm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxrXDc8_jndhAyje9ZEJSXMNaO82-ACmEBg&s" },
        { name: "Millet", image: "https://t3.ftcdn.net/jpg/01/15/32/36/360_F_115323672_320e7Bmz9nhF9uDgukpJWSmDnOjYSLsL.jpg" },
        { name: "Sorghum", image: "https://cdn.britannica.com/21/136021-050-FA97E7C7/Sorghum.jpg" }
    ],
    "Gypsisols": [
        { name: "Barley", image: "https://cdn.britannica.com/31/75931-050-FED41F1F/Barley.jpg" },
        { name: "Millet", image: "https://t3.ftcdn.net/jpg/01/15/32/36/360_F_115323672_320e7Bmz9nhF9uDgukpJWSmDnOjYSLsL.jpg" },
        { name: "Date Palm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxrXDc8_jndhAyje9ZEJSXMNaO82-ACmEBg&s" }
    ],
    "Lixisols": [
        { name: "Cassava", image: "https://media.istockphoto.com/id/626302984/photo/bulk-of-fresh-cassava-harvested-in-farmland.jpg?s=612x612&w=0&k=20&c=12C2lJ8IIpmTCQ4JehXEzMxzhL4S8ydpp14-cmNi6q0=" },
        { name: "Oil Palm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyZgmK8apN22R9TIgoncJFNXzusDSFTXi1w&s" },
        { name: "Yams", image: "https://img.hobbyfarms.com/wp-content/uploads/2018/09/27164238/sweet-potatoes-762611851.jpg" }
    ],
    "Planosols": [
        { name: "Rice", image: "https://t3.ftcdn.net/jpg/02/71/72/42/360_F_271724295_5mOXgLdBpOIk7jspFGSdkY1ShVqBjCie.jpg" },
        { name: "Maize", image: "https://www.shutterstock.com/image-photo/yellow-corn-on-green-plant-260nw-1918918295.jpg" },
        { name: "Soybeans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIryCHcCtTffwMFn3Xi5UpU2tF7qzRK9nLuw&s" }
    ],
    "Podzols": [
        { name: "Potatoes", image: "https://t3.ftcdn.net/jpg/04/52/75/46/360_F_452754668_F8QX82iY9YCEeywoXa7KSLufO03eY4G3.jpg" },
        { name: "Barley", image: "https://cdn.britannica.com/31/75931-050-FED41F1F/Barley.jpg" },
        { name: "Oats", image: "https://media.istockphoto.com/id/966513720/photo/the-concept-of-healthy-eating-whole-grains-of-oats-and-oat-spikelets.jpg?s=612x612&w=0&k=20&c=mmsDF_ld99Yvcgs7wygcT_7Lkx4vTqQQemFuwY_aTx4=" }
    ],
    "Solonchaks": [
        { name: "Barley", image: "https://cdn.britannica.com/31/75931-050-FED41F1F/Barley.jpg" },
        { name: "Cotton", image: "https://cdn.pixabay.com/photo/2019/11/24/17/08/cotton-4649804_640.jpg" },
        { name: "Salt-Tolerant Crops", image: "https://geneticliteracyproject.org/wp-content/uploads/2018/11/42-60978110.jpg" }
    ],
    "Solonetz": [
        { name: "Sunflower", image: "https://media.istockphoto.com/id/1010496758/photo/sunflower-field-at-sunset.jpg?s=612x612&w=0&k=20&c=OY6aNc-ymkziYFCp6-5wqIC-GzjXIjmLJCROXq2yd4w=" },
        { name: "Wheat", image: "https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg" },
        { name: "Barley", image: "https://cdn.britannica.com/31/75931-050-FED41F1F/Barley.jpg" }
    ],
    "Leptosols":[
        { name: "Pine", image: "https://cdn.pixabay.com/photo/2016/04/15/02/53/cones-1330187_1280.jpg"},
        {name:"Teak",image:"https://m.media-amazon.com/images/I/818kQhLX7AL.AC_UF1000,1000_QL80.jpg"}

    ]
};

export default soilCrops;