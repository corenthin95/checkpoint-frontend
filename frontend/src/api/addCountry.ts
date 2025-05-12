import {gql} from "@apollo/client";

export const mutationCreatedCountry = gql `
    mutation addCountry($data: NewCountryInput!) {
        addCountry(data: $data) {
            code
            emoji
            id
            name
            continent {
                id
                name
            }
        }
    }
`