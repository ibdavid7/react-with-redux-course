import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { accordion, dropdownData } from "../Data/dummy";
import ErrorPage from './error-page'

import {
    DropdownPage,
    ModalPage,
    TablePage,
    CounterPage,
    CounterPageReducer,
    CounterPageReducerImmer,
    PlaylistPage,
    CarWidget,
    PhotoWidget,
    PostWidget,

} from '../Pages';
import { Accordion, Route, SinglePostPage, PostList, AddPostForm, EditPostPage } from '../Components';
import { Pdas, AnimalWidget, BookWidget, ImageSearch, SideBar, ButtonsWidget } from "../Containers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dropdown",
                element: <DropdownPage />,
            },
            {
                path: "/accordion",
                element: <Accordion items={accordion} />,
            },
            {
                path: "/buttons",
                element: <ButtonsWidget />,
            },
            {
                path: "/modal",
                element: <ModalPage />,
            },
            {
                path: "/table",
                element: <TablePage />,
            },
            {
                path: "/counter",
                element: <CounterPage />,
            },
            {
                path: "/counterreducer",
                element: <CounterPageReducer />,
            },
            {
                path: "/counterreducerimmer",
                element: <CounterPageReducerImmer />,
            },
            {
                path: "/playlist",
                element: <PlaylistPage />,
            },
            {
                path: "/car",
                element: <CarWidget />,
            },
            {
                path: "/photos",
                element: <PhotoWidget />,
            },
            {
                path: "/books",
                element: <BookWidget />,
            },
            {
                path: "/imagesearch",
                element: <ImageSearch />,
            },
            {
                path: "/pdas",
                element: <Pdas />,
            },
            {
                path: "/animals",
                element: <AnimalWidget />,
            },
            {
                element: <PostWidget />,
                path: "/posts",
            },
            {
                path: "posts/new/",
                element: <AddPostForm />,
            },
            {
                path: "posts/:postId",
                element: <SinglePostPage />,
            },
            {
                path: "posts/edit/:postId",
                element: <EditPostPage />,
            },

        ],
    },
    ,
    {
        path: "/posts",
        element: <PostWidget />,
    },

]);

export default router;

