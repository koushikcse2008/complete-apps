export default interface Service {
    _id?: string;
    sv_name?: string;
    sv_desc?: string;
    sv_image?: File | null;
    sv_status?: string;
    createdAt?: string;
}
