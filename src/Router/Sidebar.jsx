import React from 'react'
import { NavLink } from 'react-router-dom'



const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "Accordion", to: "/accordion", id: 2 },
    { name: "Buttons", to: "/buttons", id: 3 },
    { name: "Modal", to: "/modal", id: 4 },
    { name: "Table", to: "/table", id: 5 },
    { name: "Counter", to: "/counter", id: 6 },
    { name: "Counter-Reducer", to: "/counterreducer", id: 7 },
    { name: "Counter-Reducer-Immer", to: "/counterreducerimmer", id: 8 },
    { name: "Paylist", to: "/playlist", id: 9 },
    { name: "Car Widget", to: "/car", id: 10 },
    { name: "Photo Widget", to: "/photos", id: 11 },
    { name: "Post Widget", to: "/posts", id: 12 },
    { name: "Post", to: "/post", id: 18 },
    { name: "Books Widget", to: "/books", id: 13 },
    { name: "Image Search", to: "/imagesearch", id: 14 },
    { name: "PDAs", to: "/pdas", id: 15 },
    { name: "Animal Widget", to: "/animals", id: 16 },
    { name: "Blog", to: "/blog", id: 17 },
];


const Sidebar = () => {
    return (
        <>
            <div id="sidebar" className={'flex flex-col border border-amber-800'}>
                {/* other code */}

                <nav>
                    {links.length ? (
                        <ul>
                            {links.map((link) => (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{'No Links to display'}</p>
                    )}
                </nav>
            </div>
        </>
    )
}

export default Sidebar


