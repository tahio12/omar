import java.util.Arrays;

class MountainSort {

	public static void main(String[] args) {

		int[][] Tests = {
				{},
				{6, 2, 8, 5, 7, 5, 0, 2},
				{2,2,2,2,2,2,2,2},
				{4, -7, 2, 1, 0, 2, 4, 2, -3, 3, -3, 7, -2, 7, 7},
				{-2, -2, -4, -9, -1, -6, -1, -14, -3, -15, -12, -12, -2, -8, -9},
		};
		for (int[] S: Tests) {
			try {
				System.out.println("Given array: " + Arrays.toString(S));
				S = MountainSort(S); //change the name of function if necessary
				System.out.println("Array sorted: " + Arrays.toString(S));
				System.out.println();
			} catch (Exception e) {
				System.out.println("Error for array: "+ Arrays.toString(S));
				System.out.println(e);
			}
		}
	}


	public static int[] MountainSort(int[] S) {
		if(S.length != 0) {
			int minimum = Arrays.stream(S).min().getAsInt();
			int maximum = Arrays.stream(S).max().getAsInt();
			int range = maximum - minimum + 1;
			int recCount = S.length;
			int check[] = new int[range];
			int answer[] = new int[S.length];

			for (int i : S) {
				check[i - minimum]++;
			}
			for (int i = 1; i < check.length; i++) {
				check[i] = check[i] + check[i - 1];
			}
			for (int i = S.length - 1; i >= 0; i--) {
				answer[check[S[i] - minimum] - 1] = S[i];
				check[S[i] - minimum]--;
			}
			for (int i = 0; i < S.length; i++) {
				if(i >= S.length/2){
					S[i] = answer[recCount-1];
					recCount--;
				}else{
					S[i] = answer[i];
				}
			}
		}else{
			return S;
		}
		return S;
	}
}