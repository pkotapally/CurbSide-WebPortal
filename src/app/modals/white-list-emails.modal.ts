export class WhiteListEmails {
  constructor(
    public WhitelistEmailId: number,
    public FirstName: string,
    public LastName: string,
    public Email: string,
    public CreatedBy: string,
    public CreatedOn: Date,
    public DeactivatedDate: Date
  ) { }
}