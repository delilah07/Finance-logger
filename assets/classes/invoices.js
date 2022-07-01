var Invoice = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " is owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
export { Invoice };
