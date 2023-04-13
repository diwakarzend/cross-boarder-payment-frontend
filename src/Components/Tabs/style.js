import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow: auto;
    gap: 20px;
    margin-bottom: 30px;
    .tab-list {
        padding-bottom: 3px;
        font-size: 16px;
        line-height: 37px;
        font-weight: 500;
        color: var(--ip-footer-color);
        position: relative;
        cursor: pointer;
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 100%;
            background: transparent;
            border-radius: 2px;
        }
        &.active {
            color: var(--ip-vertical-menu-bg-dark);
            &:after {
                background: var(--ip-vertical-menu-bg-dark) linear-gradient(252deg,#193d7d4d 0%,#00ffff4d 100%) 0% 0% no-repeat padding-box;
            }
            
        }
    }
`