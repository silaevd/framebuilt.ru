export class ContactInterface {
    success: boolean;
    data: {
        address: string;
        id: number;
        phone: string;
        email: string;
    };
}