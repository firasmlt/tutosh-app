// Model to create logs of each activity

// Table fields mapping
export type Logs = {
    id?: number;
    date_time?: string,
    module?: string,  // Module name i.e UI
    country?: string,
    city?: string,
    ip?: string,
    log_level?: string, // Log type i.e info, error
    message?: string,   // Log message string
    class?: string,     // Calling class name
};
