export class CustomError extends Error {
  public readonly timestamp: string;

  constructor(name: string, message: string, stack?: string) {
    super(message);
    
    this.name = name;
    
    // Set custom stack if provided, otherwise use the default
    if (stack) {
      this.stack = stack;
    }
    
    // Add timestamp
    this.timestamp = new Date().toISOString();
    
    // Maintain proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
