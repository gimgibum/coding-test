class Solution {
    public int solution(int a, int b, int c, int d) {
        int answer = 0;
        int sum = 0;
        int min = 0;
        //1
        if(a==b&&c==d&&b==c){
            answer = a*1111;
        }
        //2
        else if(a!=b&&c==d&&b==c){
            sum = 10*c+a;
            answer = sum*sum;
        }else if(a==b&&c!=d&&b==d){
            sum = 10*a+c;
            answer = sum*sum;
        }else if(a==b&&d!=c&&b==c){
            sum = 10*c+d;
            answer = sum*sum;
        }else if(b!=a&&c==d&&a==c){
            sum = 10*c+b;
            answer = sum*sum;
        }
        //3
        else if(a==b&&d==c){
            sum = a-c;
            if(sum < 0){
                sum = -sum;
            }
            answer = (a+c)*sum;
        }else if(a==c&&d==b){
            sum = a-b;
            if(sum < 0){
                sum = -sum;
            }
            answer = (a+b)*sum;
        }else if(a==d&&b==c){
            sum = a-b;
            if(sum < 0){
                sum = -sum;
            }
            answer = (a+b)*sum;
        }
        //4
        else if (a == b) answer = c * d;
        else if (a == c) answer = b * d;
        else if (a == d) answer = b * c;
        else if (b == c) answer = a * d;
        else if (b == d) answer = a * c;
        else if (c == d) answer = a * b;
        //5
        else{
            min = a;
            if(b < min) min = b;
            if(c < min) min = c;
            if(d < min) min = d;
            answer = min;
        }
        
        return answer;
    }
}