import { UIContribution } from "@seval-portal/ui-protocol";
import { SubmitPage } from "./SubmitPage";
import { ResultPage } from "./ResultPage";

export const Contribution: UIContribution = {
    name: "RAI",
    pages: {
        resultPage: ResultPage,
        submitPage: SubmitPage
    }
}