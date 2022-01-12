import { useCallback, useMemo, useState } from "react";
import { UploadChangeParam } from "antd/lib/upload";

// TODO: move to antd package
export type UseFileUploadStateType = () => {
    isLoading: boolean;
    onChange: (info: UploadChangeParam) => void;
};

export const useFileUploadState: UseFileUploadStateType = () => {
    const [isLoading, setIsloading] = useState(false);

    const onChange = useCallback((info: UploadChangeParam) => {
        const fileListLoadings = mapStatusToLoading(info.fileList);

        if (fileListLoadings.includes(true)) {
            setIsloading(true);
        } else {
            setIsloading(false);
        }
    }, []);

    return useMemo(() => ({ isLoading, onChange }), [isLoading]);
};

const mapStatusToLoading = (files: UploadChangeParam["fileList"]) => {
    return files.map((file) => {
        switch (file.status) {
            case "uploading":
                return true;
            case "error":
            case "done":
            case "removed":
            case "success":
            default:
                return false;
        }
    });
};
