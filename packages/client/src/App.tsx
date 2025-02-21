import { OPGContribution } from "@seval-portal/opg";
import { RAIContribution } from "@seval-portal/rai";
import { Divider } from "@seval-portal/shared";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Submit Page</h1>
                <div
                    style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}
                >
                    <OPGContribution.pages.submitPage />
                    <RAIContribution.pages.submitPage />
                </div>
            </div>
            <Divider />
            <div>
                <h1>Result Page</h1>
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <OPGContribution.pages.resultPage />
                    <RAIContribution.pages.resultPage />
                </div>
            </div>
        </div>
    );
}

export default App;
