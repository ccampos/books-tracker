import { AccessInfo } from "./accessinfo.interface";
import { SaleInfo } from "./saleinfo.interface";
import { SearchInfo } from "./searchinfo.interface";
import { VolumeInfo } from "./volumeinfo.interface";

export interface Volume {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo?: SaleInfo;
    accessInfo?: AccessInfo;
    searchInfo?: SearchInfo;
}
