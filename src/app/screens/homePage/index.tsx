import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css"


export default function HomePage() {
// selector: store => data
useEffect(()=> {
    // BAckend data request => Data
    // Slice: Data => Store
}, [])

    return <div className={"homepage"}>
<Statistics />
<PopularDishes />
<NewDishes />
<Advertisement />
<ActiveUsers />
<Events />
    </div>
}