export class NewRoom{
    constructor(
        public userName: String,
        public roomNo : Number,
        public buildingNo : Number,
        public PAN : String,
        public aadhar : Number,
        public address : String,
        public lastModified? : Date,
    ){}
}