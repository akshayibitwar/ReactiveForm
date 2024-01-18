export class CustomPattern {
public static password = "('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')";
public static onlytext = "^(?!\s|.*\s$).*$";
public static username = "^[a-z0-9_-]{8,15}$";
public static email = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
public static updateEmail = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" ;
}