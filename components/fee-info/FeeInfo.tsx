import { RewardClaimFee } from '@/components/fee-info/RewardClaimFee'
import { StakeFee } from '@/components/fee-info/StakeFee'
import { UnstakeFee } from '@/components/fee-info/UnstakeFee'

export const FeeInfo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <RewardClaimFee />
      <StakeFee />
      <UnstakeFee />
    </div>
  )
}
