import styled from 'styled-components';

export const DashboardWrapper = styled.div`
    &.analysis-and-statistics {
        .transaction-analysis {
            margin-right: 24px;
            flex: 0 0 70%;
            max-width: 70%;
        }
        .overall-statistics {
            flex: 1;
            .card-body {
                padding: 10px;
            }
            .overall-chart {
                width: 180px;
                margin: 0 auto;
                padding-top: 16px;
                strong {
                    margin-left: 24px;
                }
            }
        }
    }
`