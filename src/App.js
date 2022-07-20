import React, {useState}from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Layout/Header";
import NotFound from "./Layout/NotFound";
import Home from "./Layout/Home";
import CreateDeck from "./Layout/CreateDeck";
import Deck from "./Layout/Deck";
import Study from "./Layout/Study";
import EditDeck from "./Layout/EditDeck";
import AddCard from "./Layout/AddCard";
import EditCard from "./Layout/EditCard";


function App() {
    //AddCard States
    const initialState = {
        front: "",
        back: "",
    };

    const [newCard, setNewCard] = useState(initialState);
    const [deck, setDeck] = useState({});
    return (
        <>
            <Header />
            <div className="app-routes">
                <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/decks/new">
                            <CreateDeck />
                        </Route>
                        <Route exact path="/decks/:deckId">
                            <Deck />
                        </Route>
                        <Route path="/decks/:deckId/study">
                            <Study />
                        </Route>
                        <Route path="/decks/:deckId/edit">
                            <EditDeck />
                        </Route>
                        <Route path="/decks/:deckId/cards/new">
                            <AddCard newCard={newCard} setNewCard={setNewCard} deck={deck} setDeck={setDeck} initialState={initialState}/>
                        </Route>
                        <Route path="/decks/:deckId/cards/:cardId/edit">
                            <EditCard />
                        </Route>
                        <NotFound />
                    </Switch>
            </div>
        </>
    );
}

export default App;
