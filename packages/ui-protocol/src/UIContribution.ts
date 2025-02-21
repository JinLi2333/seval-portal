import React from "react";

export interface UIContribution {
    name: string,
    pages: {
        resultPage: React.ComponentType,
        submitPage: React.ComponentType
    }
}

// follow up:
// create data package that limited for partners
// but full access for client package