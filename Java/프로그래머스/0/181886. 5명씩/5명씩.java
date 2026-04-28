class Solution {
    public String[] solution(String[] names) {
        int size = (names.length + 4) / 5;
        String[] answer = new String[size];
        int a = 0;
        for(int i = 0; i<names.length; i++){
            if(i%5==0){
                answer[a] = names[i];
                a++;
            }
        }
        return answer;
    }
}