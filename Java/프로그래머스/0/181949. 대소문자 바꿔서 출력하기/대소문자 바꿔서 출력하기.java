import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String answer = "";
        for(int i = 0; i < a.length(); i++){
            char b = a.charAt(i);
            
            if(b >= 'A' && b <= 'Z'){
                answer += (char)(b + 32);
            }else if(b >= 'a' && b <= 'z'){
                answer += (char) (b - 32);
            }
        }
        System.out.print(answer);
    }
}