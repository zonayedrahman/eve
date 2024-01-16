"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

type PaginationProps = {
    urlParamName?: string;
    page: number | string;
    totalPages?: number;
};

const Pagination = ({ urlParamName, page, totalPages }: PaginationProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const onClick = (btnType: string) => {
        const pageValue =
            btnType === "prev" ? Number(page) - 1 : Number(page) + 1;

        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: urlParamName || "page",
            value: pageValue.toString(),
        });

        router.push(newUrl, { scroll: false });
    };

    return (
        <div className="flex gap-2">
            <Button
                size="lg"
                variant="outline"
                className="w-28"
                onClick={() => onClick("prev")}
                disabled={Number(page) <= 1}
            >
                Previous
            </Button>

            <Button
                size="lg"
                variant="outline"
                className="w-28"
                onClick={() => onClick("next")}
                disabled={Number(page) >= totalPages!}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
