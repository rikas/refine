import { useLink, useRouterContext, useRouterType } from "@pankod/refine-core";
import React, { ReactNode } from "react";

interface PaginationLinkProps {
    to: string;
    element: ReactNode;
}

export const PaginationLink = ({ to, element }: PaginationLinkProps) => {
    const { Link: LegacyLink } = useRouterContext();
    const routerType = useRouterType();
    const Link = useLink();

    const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

    return (
        <ActiveLink
            to={to}
            replace={false}
            onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
                e.preventDefault();
            }}
        >
            {element}
        </ActiveLink>
    );
};
