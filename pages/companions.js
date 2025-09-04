
import SplashTriad from '../components/SplashTriad';
import CompanionGallery from '../components/CompanionGallery';

export default function CompanionsPage() {
  return (
    <div className="px-4 py-8">
      <SplashTriad />
      <h2 className="text-2xl font-bold my-6">Volume VII: MAHEE-Certified Companions</h2>
      <CompanionGallery />
    </div>
  );
}
